const express = require('express');
const router = express.Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Card = require('../components/Card');
const { Question } = require('../db/models');
const Cards = require('../components/Cards');

router.get('/:titleId/index/:questionId', async (req, res) => {
  const questions = await Question.findAll({
    where: { titleId: req.params.titleId },
  });
  if (req.params.questionId === '0') {
    console.log(199999);
    const elem = React.createElement(Cards, {
      title: 'QCard',
      card: questions[0],
      parametr: Number(req.params.questionId) + 1,
    });
    const html = ReactDOMServer.renderToStaticMarkup(elem);
    const data = `<!DOCTYPE html>${html}`;
    res.send(data);
  }
  // if (Number(req.params.questionId) > 0 && Number(req.params.questionId) < 6) {
    console.log(2);
    const elem = React.createElement(Card, {
      card: questions[Number(req.params.questionId)],
      parametr: Number(req.params.questionId) + 1,
    });
    const html = ReactDOMServer.renderToStaticMarkup(elem);
    res.json({ doc: html });
  // } else {
    // здесь я переадресовываю на страницу регистрации
    res.json({ message: 'redirect' });
  // }
});

// router.get('/', (req, res) => {
//   const elem = React.createElement(Card, {
//     title: 'QCard',
//   });
//   const html = ReactDOMServer.renderToStaticMarkup(elem);
//   const data = `<!DOCTYPE html>${html}`;
//   res.send(data);
// });
// // передаем
// //в диве обязательно в гет прописываем question.answer и делаем его невидимым, а тут возвращаем message:'true'
// router.post('/:idQuestionTitle/:idCard', async(req,res) => {
//     try {
//         const {answer} = req.body;
//     const qestion = await Question.findOne({where: {id: req.params.idCard}});
//     //найти юзера!!!!!!!! чтоюбы баллы добавить
//     const trueAnswer = question.answer;
//     if(answer === trueAnswer){
//         // const score = User.update(+=10);
//     }
//     res.json({message:`ok`});
//     } catch (error) {

//     }

// });
// // в форме нужно как-то менять вопрос и ответ, name=answer КАК поменять h1 h2 p на то, что у нас в базе
// router.get('/:idQuestionTitle/', (req,res) => {
//     // const { cardNumber } = req.body; //??????????????
//     const cards = await Question.findAll({where:{titleId: req.params.idQuestionTitle}});

//         const elem = React.createElement(Card, {
//             title: 'QCard',
//             cardQuestion: cards[req.params.idCard]
//           });
//           const html = ReactDOMServer.renderToStaticMarkup(elem);
//           const data = `<!DOCTYPE html>${html}`;
//     res.json({html: data});
//     // res.json(message);

// });

module.exports = router;
