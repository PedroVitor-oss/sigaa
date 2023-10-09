const { app } = require("./src/app");
const { createHome,createStyleHome } = require("./components/home");
//const { port } = require("./config.json");
const port = process.env.PORT;

app.get("/",(req,res)=>{res.redirect("/login")});
app.get("/login",(req,res)=>{
    res.render("login",{
        styles:[{css:"/css/login.css"}]
    })
});
app.post("/login",(req,res)=>{
    const name = req.body.login;
    const password = req.body.senha;
    if(name == "PedroVitor" && password == "pedro2207vitor")
    {
        res.redirect("/sigaa/portais/discente/boletin");
    }else{
        res.render("login",{
            styles:[{css:"/css/login.css"}]
        })
    }
});
app.get("/sigaa/portais/discente/boletin",(req,res)=>{

    const isMobile = req.headers['user-agent'].includes("Mobile");
    

    res.render("boletin",
    {
     styles:[
        {css:"/css/boletin.css"}
     ]
    })
})

app.listen(port,console.log("aberto  em https://localhost:"+port));