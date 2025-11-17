import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatChipsModule } from '@angular/material/chips'
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms'
import { NovaAccordionComponent } from '../../nova-accordion/nova-accordion.component'
import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-nova',
  imports: [
    MatCardModule,
    MatExpansionModule,
    MatCardModule, CommonModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    NovaAccordionComponent,
    FooterComponent
  ],
  templateUrl: './nova.component.html',
  styleUrl: './nova.component.scss'
})
export class NovaComponent {
  novaAccordionData = [{
    title: 'Unprocessed or Minimally Processed',
    description: 'Fresh fruits and vegetables',
    imageGroup: 'assets/nova-group-1.svg',
    paragraph: `Foods obtained directly from plants or animals that are either
      unprocessed or only minimally processed — meaning they may be
      cleaned, peeled, cut, dried, chilled, frozen, pasteurized, or
      otherwise prepared without adding substances like salt, sugar, oils,
      or additives. These foods form the foundation of a nutritious,
      balanced, and naturally flavorful diet.`,
    note: `These foods form the foundation of a nutritious, balanced, and
      naturally flavorful diet.`,
    imageGroupAlt: 'NOVA Group 1',
    imageDescription: 'assets/g1.png',
    imageDescriptionAlt: 'Fruits and vegetables'
  }, {
      title: 'Processed Culinary Ingredients',
      description: 'Oils, salt, sugar',
    imageGroup: 'assets/nova-group-2.svg',
    imageGroupAlt: 'NOVA Group 2',
    paragraph: `Oils, fats, salt, and sugar used to prepare or season foods.`,
    note: `These are not substitutes for real foods and should be used in moderation.`,
    imageDescription: 'assets/g2.png',
    imageDescriptionAlt: 'Oils and salt'
    },
    {
      title: 'Processed Foods',
      description: 'Bread, cheese, canned goods',
      imageGroup: 'assets/nova-group-3.svg',
      imageGroupAlt: 'NOVA Group 3',
      paragraph: `Industrialized foods made from unprocessed foods with added salt, sugar,
        or oil. `,
    note: `Recognizable as versions of original foods and can be used in
        moderation.`,
    imageDescription: 'assets/g3.png',
    imageDescriptionAlt: 'Bread and cheese'
    },
    {
      title: 'Ultra-Processed Foods',
      description: 'Packaged snacks, sugary drinks',
      imageGroup: 'assets/nova-group-4.svg',
      imageGroupAlt: 'NOVA Group 4',
      paragraph: `Industrial products made mostly from substances synthesized in
        laboratories (colorings, flavorings, additives). `,
    note: `They are designed to be
        convenient and attractive but replace real foods and should be avoided.`,
    imageDescription: 'assets/g4.png',
    imageDescriptionAlt: 'Chips and soda'
  }
  ];


  novaSteps = [
    {
      title: 'Make unprocessed foods the base',
      description: 'Include grains, roots, tubers, flours, vegetables, fruits, eggs, and meats. Choose fresh and seasonal varieties whenever possible.',
      img: 'assets/step1.png'
    },
    {
      title: 'Use oils, fats, salt, and sugar in moderation',
      description: 'None of these should replace unprocessed foods. Reducing these gradually helps train your palate.',
      img: 'assets/step2.png'
    },
    {
      title: 'Limit processed foods',
      description: 'Processed foods are meant to extend the shelf life of natural foods. Use them in moderation.',
      img: 'assets/step3.png'
    },
    {
      title: 'Avoid ultra-processed foods',
      description: 'Even when fortified, these products often replace real meals, are made from inexpensive ingredients, digest quickly, and are designed to taste so good that they can make you eat more than you need.',
      img: 'assets/step4.png'
    },
    {
      title: 'Eat regularly and mindfully',
      description: 'Eat in appropriate settings, with company if possible. Avoid excessive snacking.',
      img: 'assets/step5.png'
    },
    {
      title: 'Shop for variety',
      description: 'Choose stores with a variety of unprocessed or minimally processed foods. Fresh foods are healthier and can be affordable.',
      img: 'assets/step6.png'
    },
    {
      title: 'Develop cooking skills',
      description: 'Practice, experiment, and share your culinary skills.',
      img: 'assets/step7.png'
    },
    {
      title: 'Plan your time',
      description: 'Give meals the attention they deserve by planning your time.',
      img: 'assets/step8.png'
    },
    {
      title: 'Prefer on-site prepared meals',
      description: 'Whenever possible, choose meals prepared fresh on-site rather than pre-packaged food.',
      img: 'assets/step9.png'
    },
    {
      title: 'Be critical of food info',
      description: 'Evaluate information and advertising about food critically.',
      img: 'assets/step10.png'
    },
  ];

  footerText = `Content based on the 
      <a href="https://bvsms.saude.gov.br/bvs/publicacoes/guia_alimentar_populacao_brasileira_2ed.pdf"
         target="_blank" rel="noopener noreferrer">
         Guia Alimentar para a População Brasileira
      </a>.`
}
