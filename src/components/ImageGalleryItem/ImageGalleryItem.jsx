import { React, Component } from 'react';
import css from './ImageGalleryItem.module.css';
// import { Modal } from 'components/Modal/Modall';
import { MyModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    tags: '',
    largeImageURL: '',
  };
  onOpenModal = (largeImageURL, tags) => {
    this.setState({ showModal: true, largeImageURL, tags });
  };
  onCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: '', tags: '' });
  };

  render() {
    return this.props.images.map(
      ({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <>
            <li
              className={css.galleryItem}
              key={id}
              onClick={() => this.onOpenModal(largeImageURL, tags)}
            >
              <img
                className={css.ImageGalleryItem}
                src={webformatURL}
                alt={tags}
              />
            </li>
            {/* {this.state.showModal && (
              <Modal hideModal={this.toggleModal}>
                {this.state.largeImageURL}
              </Modal>
            )} */}
            {this.state.showModal && (
              <MyModal
                modalIsOpen={this.state.showModal}
                modalIsClose={this.onCloseModal}
                largeImg={this.state.largeImageURL}
                tags={this.state.tags}
              />
            )}
          </>
        );
      }
    );
  }
}
