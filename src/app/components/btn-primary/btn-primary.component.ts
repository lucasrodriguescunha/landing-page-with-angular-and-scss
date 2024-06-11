// Importa os módulos necessários do Angular
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Define um tipo para as variantes do botão, podendo ser 'primary' ou 'secondary'
type BtnVariants = 'primary' | 'secondary';

// Declaração do componente Angular
@Component({
  // Seletor usado para instanciar o componente em um template
  selector: 'btn-primary',
  // Indica que este é um componente independente
  standalone: true,
  // Especifica quais módulos externos serão importados (nenhum neste caso)
  imports: [CommonModule],
  // Caminho para o template HTML do componente
  templateUrl: './btn-primary.component.html',
  // Caminho para o arquivo de estilos CSS do componente
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  // Decorador @Input para receber o texto do botão como entrada
  @Input('btn__text') btnText: string = '';
  // Decorador @Input para indicar se o botão está desabilitado
  @Input() disabled: boolean = false;
  // Decorador @Input para indicar se o botão está em estado de carregamento
  @Input() loading: boolean = false;
  // Decorador @Input para definir a variante do botão (primária ou secundária)
  @Input() variant: BtnVariants = 'primary';

  // Decorador @Output para emitir um evento de submit
  @Output('submit') onSubmit = new EventEmitter();

  // Método para emitir o evento de submit quando o botão é clicado
  submit() {
    this.onSubmit.emit();
  }
}
