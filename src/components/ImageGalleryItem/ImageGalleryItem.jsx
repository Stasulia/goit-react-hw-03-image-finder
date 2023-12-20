import { React, Component } from 'react';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    tags: '',
    largeImageUrl: '',
  };
  onOpenModal = (largeImageUrl, tags) => {
    this.setState({ showModal: true, largeImageUrl, tags });
  };
  onCloseModal = () => {
    this.setState({ showModal: false, largeImageUrl: '', tags: '' });
  };
  render() {
    return this.props.images.map(
      ({ id, webformatURL, tags, largeImageUrl }) => {
        return (
          <>
            <li
              className={css.galleryItem}
              key={id}
              onClick={() => this.onOpenModal(largeImageUrl, tags)}
            >
              <img
                className={css.ImageGalleryItem}
                src={webformatURL}
                alt={tags}
              />
            </li>
            {/* {this.state.showModal && (
              <MyModal
                modalIsOpen={this.state.showModal}
                modalIsClose={this.onCloseModal}
                largeImg={this.state.largeImageUrl}
                tags={this.state.tags}
              />
            )} */}
          </>
        );
      }
    );
  }
}

export default ImageGalleryItem;
