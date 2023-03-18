import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/material.dart';

class Questao extends StatelessWidget {
  final String texto;

  Questao(this.texto);

  Widget build(BuildContext context) {
    return Container (
    width: double.infinity,
    margin: EdgeInsets.all(10),

     child: Text(
         texto,
         style: TextStyle(fontSize: 28),
         textAlign: TextAlign.center,   
      ),  
      );
  }
}
