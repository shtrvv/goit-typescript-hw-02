/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface MyProps {
  title: string
}

class Component<T> {
  constructor (public props:T) {}
}

class Page extends Component<MyProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};