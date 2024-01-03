import re

class BseankitInterpreter:
    def __init__(self):
        self.variables = {}

    def tokenize(self, code):
        return re.findall(r'\d+|\w+|\S', code)

    def execute(self, code):
        tokens = self.tokenize(code)
        # Proses token dan jalankan perintah
        for token in tokens:
            if token.isnumeric():
                print("Numeric Literal:", token)
            elif token.isalpha():
                print("Variable/Identifier:", token)
            else:
                print("Operator/Symbol:", token)

# Contoh penggunaan
interpreter = BseankitInterpreter()
code_example = "PRINT 'Hello, World!'"
interpreter.execute(code_example)
