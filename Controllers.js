$('head').append('<script src=\'../../js/article/ArticleController.js\'><\/script>');

//Controllers 객체
Controllers = function() {

}

Controllers.articleController = new ArticleController();

Controllers.getArticleController = function() {

  return Controllers.articleController;
  
}
