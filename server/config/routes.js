var controller = require('../controllers/controllers');


module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/current', controller.current);
    app.get('/logout', controller.logout);
    // questions
    app.get('/api/questions', controller.getQuestions);
    app.post('/api/questions', controller.createQuestion);
    app.get('/api/questions/:id', controller.getQuestion );
    
    // answers
    app.post('/api/answers/:question_id', controller.createAnswer);
    app.get('/api/answers/:id', controller.like);
}