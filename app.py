
from flask import Flask, render_template, url_for,json  
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__,template_folder='template')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_BINDS'] = {'test2':'sqlite:///test2.db'}
db = SQLAlchemy(app)
class Todo(db.Model):
    id = db.Column(db.Integer, unique=True ,primary_key=True)
    # score = db.Column(db.String(200), nullable=False)
    score = db.Column(db.Integer,default=0)
    
    
    def __repr__(self):
        return f"{self.id}-{self.score}"

class Todo2(db.Model):
    __bind_key__ = 'test2'
    id2 = db.Column(db.Integer, unique=True ,primary_key=True)
    # score = db.Column(db.String(200), nullable=False)
    score2 = db.Column(db.Integer,default=0)
    
    
    def __repr__(self):
        return f"{self.id2}-{self.score2}"


@app.route("/home")
def index():
    return render_template('index.html')

@app.route("/static/tower/<string:info>",methods=['POST'])
def process(info):
    i = 0
    try:
        highScore = Todo.query.order_by(Todo.id).all()
        s = f"{highScore[-1]}"
        s1=s.split("-")
        i = int(s1[0])
    except:
        i = 0
    
    info = json.loads(info)
    print(info['highScore'])
    data = Todo(id=(int(info['id'])+i),score=(info['highScore']))
    
    db.session.add(data)
    db.session.commit()
    highScore = Todo.query.order_by(Todo.score).all()
    h = f"{highScore[-1]}"
    s = h.split("-")
    # return f"entered in transaction   {data.id}   {(data.score)}"
    
    return s[1]

@app.route("/static/tower")
def tower():
    return render_template('TowerOfHanoi.html')

@app.route("/static/arrange/<string:info>",methods=['POST'])
def process2(info):
    i = 0
    try:
        highScore = Todo2.query.order_by(Todo2.id2).all()
        s = f"{highScore[-1]}"
        s1=s.split("-")
        i = int(s1[0])
    except:
        i = 0
    
    info = json.loads(info)
    print(info['highScore'])
    data = Todo2(id2=(int(info['id'])+i),score2=(info['highScore']))
    
    db.session.add(data)
    db.session.commit()
    highScore = Todo2.query.order_by(Todo2.score2).all()
    h = f"{highScore[-1]}"
    s = h.split("-")
    # return f"entered in transaction   {data.id}   {(data.score)}"
    
    return s[1]

@app.route("/static/arrange",methods=['POST','GET'])
def arrrange():
    return render_template('ArrangeNumbers.html')

if __name__ == "__main__":
    app.debug=True
    app.run()