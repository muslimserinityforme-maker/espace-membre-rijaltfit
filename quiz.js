// Quiz interactif (Nutri-Forme Niveau 4).
// Un bloc { quiz: { id, titre, questions: [{ q, img?, options[], correct, expl?, noLetters? }] } }
// affiche les questions avec des boutons radio. La personne répond, clique sur
// « Valider mes réponses » et voit la bonne réponse pour chaque question.
// 1 point par question. Les résultats sont gardés dans le navigateur.
// Un bloc { quizScore: true } affiche le score total (ex. 12 / 40).

var RF_QUIZ_KEY = 'rf_quiz_results';

function rfQuizLoad() {
  try { return JSON.parse(localStorage.getItem(RF_QUIZ_KEY)) || {}; } catch (err) { return {}; }
}

function rfQuizSave(data) {
  try { localStorage.setItem(RF_QUIZ_KEY, JSON.stringify(data)); } catch (err) { /* rien à faire */ }
}

function rfQuizEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function rfAllQuizzes() {
  var list = [];
  RF_MODULES.forEach(function (m) {
    m.niveaux.forEach(function (n) {
      (n.sousNiveaux || []).forEach(function (s) {
        (s.blocks || []).forEach(function (b) { if (b.quiz) list.push(b.quiz); });
      });
    });
  });
  return list;
}

// Score global : 1 point par bonne réponse, sur toutes les questions.
function rfQuizTotals() {
  var results = rfQuizLoad(), quizzes = rfAllQuizzes(), total = 0, got = 0, done = 0;
  quizzes.forEach(function (q) {
    total += q.questions.length;
    var r = results[q.id];
    if (r) { got += r.score; done++; }
  });
  return { total: total, got: got, done: done, quizzes: quizzes.length, results: results, list: quizzes };
}

function rfQuizLetter(q, j) {
  return q.noLetters ? '' : String.fromCharCode(97 + j) + ') ';
}

function rfQuizHtml(quiz) {
  var h = '<div class="quiz" data-quiz="' + quiz.id + '">';
  h += '<p class="quiz__title">' + rfQuizEsc(quiz.titre) + '</p>';
  quiz.questions.forEach(function (q, i) {
    h += '<div class="quiz-q" data-i="' + i + '">';
    h += '<p class="quiz-q__text"><strong>Question ' + (i + 1) + '.</strong> ' + rfQuizEsc(q.q) + '</p>';
    if (q.img) h += '<div class="niveau__images quiz-q__img"><img src="' + q.img + '" alt="" loading="lazy"></div>';
    h += '<div class="quiz-q__opts">';
    q.options.forEach(function (opt, j) {
      h += '<label class="quiz-opt"><input type="radio" name="' + quiz.id + '-' + i + '" value="' + j + '"><span>' + rfQuizLetter(q, j) + rfQuizEsc(opt) + '</span></label>';
    });
    h += '</div><div class="quiz-q__fb" hidden></div></div>';
  });
  h += '<button type="button" class="btn btn--primary quiz-validate">Valider mes réponses</button>';
  h += '<p class="quiz-msg" hidden></p>';
  h += '<div class="quiz-result" hidden></div>';
  h += '</div>';
  return h;
}

function rfQuizScoreHtml() {
  var t = rfQuizTotals();
  var h = '<div class="quiz-score">';
  h += '<p class="quiz-score__label">Ton score aux quiz</p>';
  h += '<p class="quiz-score__value"><span>' + t.got + '</span> / ' + t.total + '</p>';
  h += '<p class="quiz-score__sub">1 point par bonne réponse. Chapitres validés : ' + t.done + ' sur ' + t.quizzes + '.</p>';
  h += '<ul class="quiz-score__list">';
  t.list.forEach(function (q) {
    var r = t.results[q.id];
    h += '<li><span>' + rfQuizEsc(q.titre) + '</span><strong>' + (r ? r.score + ' / ' + q.questions.length : 'à faire') + '</strong></li>';
  });
  h += '</ul></div>';
  return h;
}

function rfQuizFindById(id) {
  var found = null;
  rfAllQuizzes().forEach(function (q) { if (q.id === id) found = q; });
  return found;
}

// Affiche la correction à partir des réponses données.
function rfQuizShowResult(box, quiz, answers) {
  var score = 0;
  quiz.questions.forEach(function (q, i) {
    var qEl = box.querySelector('.quiz-q[data-i="' + i + '"]');
    var chosen = answers[i];
    var ok = chosen === q.correct;
    if (ok) score++;
    qEl.querySelectorAll('.quiz-opt').forEach(function (lab, j) {
      var input = lab.querySelector('input');
      input.disabled = true;
      input.checked = (j === chosen);
      lab.classList.toggle('is-correct', j === q.correct);
      lab.classList.toggle('is-wrong', j === chosen && !ok);
    });
    var fb = qEl.querySelector('.quiz-q__fb');
    fb.hidden = false;
    fb.className = 'quiz-q__fb ' + (ok ? 'is-ok' : 'is-ko');
    fb.innerHTML = (ok ? '<strong>✓ Bonne réponse.</strong> ' : '<strong>✗ Ce n’est pas ça.</strong> La bonne réponse est : ' + rfQuizEsc(rfQuizLetter(q, q.correct) + q.options[q.correct]) + '. ') + (q.expl ? rfQuizEsc(q.expl) : '');
  });
  box.querySelector('.quiz-validate').hidden = true;
  box.querySelector('.quiz-msg').hidden = true;
  var t = rfQuizTotals();
  var res = box.querySelector('.quiz-result');
  res.hidden = false;
  res.innerHTML = '<p class="quiz-result__score">Score du chapitre : <strong>' + score + ' / ' + quiz.questions.length + '</strong></p>' +
    '<p class="quiz-result__total">Score total : <strong>' + t.got + ' / ' + t.total + '</strong></p>' +
    '<button type="button" class="quiz-retry">Refaire ce quiz</button>';
  res.querySelector('.quiz-retry').addEventListener('click', function () {
    var data = rfQuizLoad();
    delete data[quiz.id];
    rfQuizSave(data);
    var wrap = document.createElement('div');
    wrap.innerHTML = rfQuizHtml(quiz);
    var fresh = wrap.firstChild;
    box.parentNode.replaceChild(fresh, box);
    rfQuizBindOne(fresh);
    fresh.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  return score;
}

function rfQuizBindOne(box) {
  var quiz = rfQuizFindById(box.getAttribute('data-quiz'));
  if (!quiz) return;
  var saved = rfQuizLoad()[quiz.id];
  if (saved) {
    // restaure l'état « validé » (réponses + correction)
    rfQuizShowResult(box, quiz, saved.a);
    return;
  }
  box.querySelector('.quiz-validate').addEventListener('click', function () {
    var answers = [], missing = 0;
    quiz.questions.forEach(function (q, i) {
      var checked = box.querySelector('input[name="' + quiz.id + '-' + i + '"]:checked');
      if (checked) answers.push(Number(checked.value)); else { answers.push(null); missing++; }
    });
    var msg = box.querySelector('.quiz-msg');
    if (missing) {
      msg.hidden = false;
      msg.textContent = 'Il te reste ' + missing + ' question' + (missing > 1 ? 's' : '') + ' sans réponse. Réponds à toutes les questions avant de valider.';
      return;
    }
    var score = 0;
    quiz.questions.forEach(function (q, i) { if (answers[i] === q.correct) score++; });
    var data = rfQuizLoad();
    data[quiz.id] = { a: answers, score: score };
    rfQuizSave(data);
    rfQuizShowResult(box, quiz, answers);
    box.querySelector('.quiz-result').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function rfQuizBind(root) {
  root.querySelectorAll('.quiz[data-quiz]').forEach(rfQuizBindOne);
}
