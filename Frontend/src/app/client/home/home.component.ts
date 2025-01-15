import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories: any[] = [
    { name: 'Web Design', icon: 'image5' },
    { name: 'Web Development', icon: 'image6', active: true },
    { name: 'Marketing', icon: 'image7' },
    { name: 'Data Entry', icon: 'image8' },
    { name: 'Software Engineer', icon: 'iamge9' },
    { name: 'Graphic Designer', icon: 'image4' }
  ];
  blogs: any[] = [
    {
      title: 'Lorem ipsum is placeholder text commonly used in the graphic......',
      excerpt: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web',
      image: '../../assets/image10.png'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.......',
      excerpt: 'The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled',
      image: '../../assets/image11.png'
    },
    {
      title: 'Excepteur sint occaecat cupidatat non proident, sunt in......',
      excerpt: 'Parts of Cicero\'s De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:',
      image: '../../assets/image12.png'
    }
  ];
}
