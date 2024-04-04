import math

def calculation_circle(x, y):
    try:
        x = int(x)
        y = int(y)
        x1 = x * 0.1
        y1 = y * 0.01
        x2 = x1 * y1
        x3 = x + x1 - x2
        x4 = x3 / 11 * 10
        x5 = x + x1
        x6 = x4 * 1.1
        x7 = x - x4
        x8 = x
        return x5, x4, x6, x7,  y, x 
    except ValueError:
        return '数値を入力してください'
    except Exception as e:
        return f'エラーが発生しました: {e}'

if __name__ == '__main__':
    input_x = input('x を入力してください：')
    input_y = input('y を入力してください：')
    print(calculation_circle(input_x, input_y))
