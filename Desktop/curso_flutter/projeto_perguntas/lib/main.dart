import 'package:flutter/material.dart';
import 'questao.dart';
import 'resposta.dart';
import 'resultado.dart';

main() {
  runApp(new PerguntaApp());
}

class _PerguntaAppState extends State<PerguntaApp> {
  var _perguntaSelecionada = 0;
  final _perguntas = const [
    {
      'texto': 'Qual é a sua cor favorita?',
      'respostas': ['Preto', 'Vermelho', 'Verde', 'Branco'],
    },
    {
      'texto': 'Qual o seu animal favorito?',
      'respostas': ['Coelho', 'Elefante', 'Leão', 'Cobra'],
    },
    {
      'texto': 'Qual o seu instrutor favorito?',
      'respostas': ['Edu', 'Leo', 'João', 'Maria'],
    },
  ];

  void _responder() {
    if (temPergunta){
    setState(() {
      _perguntaSelecionada++;
    });
    }
  }

  bool get temPergunta {
    return _perguntaSelecionada < _perguntas.length;
  }

  Widget build(BuildContext context) {
    List<String> respostas = temPergunta
        ? _perguntas[_perguntaSelecionada].cast()['respostas']
        : [];
    List<Widget> widgets =
        respostas.map((t) => Resposta(t, _responder)).toList();

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Perguntas'),
        ),
        body: temPergunta ? Column(
          children: [
            Questao(_perguntas[_perguntaSelecionada]['texto'].toString()),
            ...widgets,
          ],
        ) 
        : Resultado(),
      ),
    );
  }
}

class PerguntaApp extends StatefulWidget {
  _PerguntaAppState createState() {
    // TODO: implement createState
    return _PerguntaAppState();
  }
}
