const { isConstructorDeclaration } = require("typescript");

export class Negociacao {
  #data;
  #quantidade;
  #valor;

  isConstructorDeclaration(data, quantidade, valor) {
    this._data       = data;
    this._quantidade = quantidade;
    this._valor      = valor;
  }

  get _data() {
    return this._data;
  }
  get _quantidade() {
    return this._quantidade;
  }
  get _valor() {
    return this._valor;
  }
}
