const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));
app.use('/css',express.static(path.join(__dirname,'public/css')));
app.use('/js',express.static(path.join(__dirname,'public/js')));
app.use('/images',express.static(path.join(__dirname,'public/images')));
app.use('/plugins',express.static(path.join(__dirname,'public/plugins')));

app.use(expressLayouts);
app.set('layout','./layouts/main-layout')
app.set('view engine','ejs');

// route
const PAGE_BASE_TITLE = "The Haut-Nkam Community of DC Metro Area"
const PAGE_TITLE_SEP = " | "
app.get('/',(req,res)=>{
      res.render('home',{title:PAGE_BASE_TITLE})
});
app.get('/about',(req,res)=>{
      let page = 'A Propos de Nous';
      res.render('about',{title:page+PAGE_BASE_TITLE})
});
app.get('/contact',(req,res)=>{
      let page = 'Nous Rejoindre';
      res.render('contact',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/activites',(req,res)=>{
      let page = 'Projets & Calendrier';
      res.render('activites',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/gallery',(req,res)=>{
      let page = 'Photos';
      res.render('gallery',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/videos',(req,res)=>{
      let page = 'Videos';
      res.render('videos',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/academic-day',(req,res)=>{
      let page = 'Academic Day';
      res.render('academicday',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/blog',(req,res)=>{
      let page = 'HCA Blog';
      res.render('blog',{title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/admin',(req,res)=>{
      let page = 'Administration Panel';
      res.render('admin/admin-home',{layout:'./layouts/admin-layout', menu:'home',  title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/admin-archives',(req,res)=>{
      let page = 'Administration Panel - Nouvel archive';
      res.render('admin/admin-archives',{layout:'./layouts/admin-layout', menu:'archive',  title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/admin-articles',(req,res)=>{
      let page = 'Administration Panel - Liste articles';
      res.render('admin/admin-articles',{layout:'./layouts/admin-layout', menu:'articles',  title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});
app.get('/admin-event',(req,res)=>{
      let page = 'Administration Panel - Nouvel evenement';
      res.render('admin/admin-event',{layout:'./layouts/admin-layout', menu:'event', title:page+PAGE_TITLE_SEP+PAGE_BASE_TITLE})
});


app.listen(port, ()=> console.log('site successful launched'))