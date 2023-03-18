import 'package:flutter/src/widgets/framework.dart';
import 'package:flutter/src/widgets/placeholder.dart';
import 'package:flutter/material.dart';

class Resposta extends StatelessWidget {
 
  final String texto;
  final void Function() onSelecao;
  Resposta(this.texto, this.onSelecao);


  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
     
      child: ElevatedButton(
      child: Text(texto), 
      onPressed: onSelecao,
      ),
 );
  }
}
