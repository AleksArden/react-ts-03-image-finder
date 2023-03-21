import { Component } from 'react';


import css from './Modal.module.css';
import { ICurrentImage } from 'type/typeImage';

interface IProps {
  image: ICurrentImage,
  onClose: () => void,
}

export class Modal extends Component<IProps, {}> {
 
  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }
  handleKeydown = (evt: KeyboardEvent): void => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };
  hanleClickBackdrop = (evt: React.MouseEvent<HTMLDivElement>): void => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    const {
      image: { src, alt },
    } = this.props;
    return (
      <div className={css.backdrop} onClick={this.hanleClickBackdrop}>
        <div className={css.modal}>
          <img className={css.img} src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

