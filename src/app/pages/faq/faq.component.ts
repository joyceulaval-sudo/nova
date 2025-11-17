import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatIconModule } from '@angular/material/icon'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { FooterComponent } from '../footer/footer.component'

@Component({
  selector: 'app-faq',
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule,
    FooterComponent
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqData: { question: string; answer: SafeHtml }[] = [];
  predictorFaqs: { question: string; answer: SafeHtml }[] = [];
  footerText = `The content on this page was generated with the assistance of 
    <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer">ChatGPT</a>.`

  constructor(private sanitizer: DomSanitizer) {
    this.faqData = [
      {
        question: 'What is the main goal of healthy eating guidelines?',
        answer: 'The guidelines aim to promote healthy eating habits, prevent chronic diseases, and improve overall well-being by encouraging natural and minimally processed foods while limiting ultra-processed foods.'
      },
      {
        question: 'How are foods categorized?',
        answer: 'Foods can be grouped as: 1. Unprocessed/minimally processed (fruits, vegetables, grains, dairy, meat, legumes), 2. Processed culinary ingredients (oils, butter, sugar, salt), 3. Processed foods (cheeses, breads, canned vegetables), 4. Ultra-processed foods (soft drinks, packaged snacks, instant noodles).'
      },
      {
        question: 'How should I structure my meals?',
        answer: 'Base meals on natural or minimally processed foods, use fats, sugar, and salt in moderation, limit ultra-processed foods, and prefer home-prepared meals.'
      },
      {
        question: 'Does eating habits matter, or just food choices?',
        answer: 'Eating habits matter: eat regularly and mindfully, share meals when possible, avoid distractions, and pay attention to hunger and fullness cues.'
      },
      {
        question: 'Are there tips for buying and storing food?',
        answer: 'Choose fresh or minimally processed foods, limit products with long ingredient lists, read labels carefully, and store foods properly.'
      },
      {
        question: 'Can processed foods be part of a healthy diet?',
        answer: 'Yes, moderately. Processed foods like canned beans, breads, or cheeses can be included, but ultra-processed foods should be limited.'
      },
      {
        question: 'Are there recommendations for special groups?',
        answer: 'Yes, healthy eating can be adapted for children, adolescents, pregnant and breastfeeding individuals, older adults, and people with chronic conditions.'
      },
      {
        question: 'How can I reduce ultra-processed food consumption?',
        answer: 'Cook more meals at home using fresh ingredients, replace sugary drinks with water, choose fruits and nuts instead of packaged snacks, and limit convenience foods.'
      },
      {
        question: 'What beverages are recommended?',
        answer: 'Water is preferred. Natural beverages like unsweetened fruit or vegetable juices in moderation are fine. Avoid sugary drinks, soft drinks, and energy drinks.'
      },
      {
        question: 'What is the difference between NOVA and Nutri-Score?',
        answer: this.sanitizer.bypassSecurityTrustHtml(`
          <strong>NOVA / Degree of Processing:</strong> Indicates how processed a food product is. 
          It looks at ingredients, additives, and overall transformation. Our predictor estimates this even if some product information is missing.<br><br>
          <strong>Nutri-Score:</strong> Measures the nutritional quality based on calories, sugar, fat, salt, fiber, and other nutrients. 
          A product can be highly processed but still have a good Nutri-Score.<br><br>
          <strong>Key Difference:</strong> NOVA is about <em>how much the food is transformed</em>, while Nutri-Score is about <em>how healthy it is nutritionally</em>. They complement each other.
        `)
      },
      {
        question: 'Where can I learn more about healthy eating?',
        answer: 'Reliable sources include Health Canada’s Food Guide, the World Health Organization, and national evidence-based nutrition resources.'
      }
    ]

    this.predictorFaqs = [
      {
        question: 'Can the predictor work if some information is missing?',
        answer: 'Yes! The model is designed to handle missing data and still make accurate predictions.'
      },
      {
        question: 'Who can use the Food Processing Level Predictor?',
        answer: 'Everyone! From students and educators to health-conscious consumers and researchers.'
      },
      {
        question: 'Where does the data come from?',
        answer: 'We use information from the Open Food Facts database, which contains product data from around the world.'
      },
      {
        question: 'How fast is the prediction?',
        answer: 'The prediction is nearly instant, giving you a Food score in seconds.'
      },
      {
        question: 'Is it safe to rely on the predictor for all foods?',
        answer: 'The predictor provides estimates based on available data. For rare or unusual products, results should be interpreted with caution.'
      },
      {
        question: 'Can the predictor be integrated into apps?',
        answer: 'Yes! It can be used as an API or embedded component in nutrition or health apps.'
      }
    ]

  }
}
