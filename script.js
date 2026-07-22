*{
margin:0;
padding:0;
box-sizing:border-box;
scroll-behavior:smooth;
font-family:'Poppins',sans-serif;
}

body{
background:#0d1117;
color:white;
overflow-x:hidden;
}

.background{
position:fixed;
width:100%;
height:100%;
top:0;
left:0;
background:linear-gradient(135deg,#0d1117,#0b2447,#0d1117);
background-size:400% 400%;
animation:bgMove 12s ease infinite;
z-index:-1;
}

@keyframes bgMove{
0%{background-position:0% 50%;}
50%{background-position:100% 50%;}
100%{background-position:0% 50%;}
}

header{
position:fixed;
top:0;
width:100%;
background:rgba(0,0,0,.5);
backdrop-filter:blur(10px);
padding:20px 8%;
z-index:999;
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
}

nav h2{
color:#4fc3ff;
}

nav ul{
display:flex;
list-style:none;
gap:20px;
}

nav a{
color:white;
text-decoration:none;
transition:.3s;
}

nav a:hover{
color:#4fc3ff;
}

.hero{
min-height:100vh;
display:flex;
align-items:center;
justify-content:space-around;
padding:120px 8%;
flex-wrap:wrap;
}

.hero-text{
max-width:550px;
}

.hero h1{
font-size:55px;
}

.hero span{
color:#4fc3ff;
}

.hero h3{
margin:20px 0;
font-size:28px;
}

.hero p{
line-height:1.8;
margin-bottom:30px;
}

.btn{
display:inline-block;
padding:15px 35px;
background:#2196f3;
color:white;
text-decoration:none;
border-radius:30px;
transition:.3s;
box-shadow:0 0 20px #2196f3;
}

.btn:hover{
transform:scale(1.1);
box-shadow:0 0 40px #2196f3;
}

.hero-image img{
width:330px;
height:330px;
border-radius:50%;
object-fit:cover;
border:5px solid #4fc3ff;
box-shadow:0 0 40px #4fc3ff;
animation:float 4s ease-in-out infinite;
}

@keyframes float{
0%,100%{
transform:translateY(0);
}
50%{
transform:translateY(-20px);
}
}

section{
padding:90px 8%;
}

section h2{
text-align:center;
font-size:40px;
margin-bottom:40px;
color:#4fc3ff;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.card{
background:#161b22;
padding:35px;
border-radius:20px;
text-align:center;
transition:.4s;
font-size:20px;
box-shadow:0 0 15px rgba(0,0,0,.5);
}

.card:hover{
transform:translateY(-12px);
background:#2196f3;
}

blockquote{
font-size:25px;
font-style:italic;
text-align:center;
color:#ddd;
}

footer{
text-align:center;
padding:30px;
background:#05080d;
margin-top:40px;
}

@media(max-width:768px){

nav{
flex-direction:column;
}

nav ul{
margin-top:15px;
flex-wrap:wrap;
justify-content:center;
}

.hero{
text-align:center;
}

.hero h1{
font-size:40px;
}

.hero-image img{
margin-top:40px;
width:250px;
height:250px;
}

  }
