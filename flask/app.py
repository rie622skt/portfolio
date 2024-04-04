
from flask import *
#追加------------
from calculation_circle import calculation_circle
#------------------

app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')
    
#変更&追加-----------------------
@app.route("/calc", methods=['GET','POST'])
def calc():
	if request.method == 'GET':
		return render_template('calc.html')
	elif request.method == 'POST':
		x = request.form['x']
		y = request.form['y']
		result = calculation_circle(x, y)
		if len(result) == 6:
			return render_template('calc.html', x=int(result[5]),x5=int(result[0]),x4=int(result[1]),x6=int(result[2]),x7=int(result[3]),y=result[4])
		else:
			return render_template('calc.html',error=result)
#-------------------------------------
	

if __name__ == '__main__':
    app.run()