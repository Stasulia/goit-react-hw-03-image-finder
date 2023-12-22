import React from 'react';
import { Component } from 'react';
import * as ImageService from './Service/imagesApi';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { Circles } from 'react-loader-spinner';

class App extends Component {
  state = {
    images: [],
    searchName: '',
    page: 1,
    isLoading: false,
    error: '',
    isEmpty: false,
    isVisible: false,
  };

  // componentDidMount() {
  //   this.getImages();
  // }

  componentDidUpdate(preProps, prevState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.getImages(searchName, page);
    }
  }

  getImages = async (searchName, page) => {
    if (!searchName) return;
    this.setState({ isLoading: true, error: '' });
    try {
      const { hits, totalHits } = await ImageService.getAllImages(
        searchName,
        page
      );
      if (hits.length === 0) {
        this.setState({ isEmpty: true });
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: this.state.page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleSubmit = value => {
    this.setState({
      searchName: value,
      page: 1,
      images: [],
      error: [],
      isEmpty: false,
    });
  };
  // handleClick = () => {
  //   this.setState(prevState => ({ isShowImages: !prevState.isShowImages }));
  // };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
  };

  render() {
    const { images, isLoading, error, isVisible, isEmpty } = this.state;
    return (
      <>
        <div
          style={{
            height: '100vh',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: 'rgb(164, 218, 220)',
          }}
        >
          <Searchbar onSubmit={this.handleSubmit} />

          {error && <h1>{error}</h1>}
          {isEmpty && <h1>Sorry, there is no images</h1>}

          <ImageGallery children={<ImageGalleryItem images={images} />} />
          {isVisible && !isLoading && images.length > 0 && (
            <Button
              onClick={this.handleLoadMore}
              children={isLoading ? 'Loading' : 'Load more'}
            />
          )}
          {isLoading && (
            <Circles
              height="80"
              width="80"
              color="rgb(164, 218, 220)"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
