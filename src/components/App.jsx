import React from 'react';
import { Component } from 'react';
import * as ImageService from './Service/imagesApi';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
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
    try {
      this.setState({ isLoading: true, error: '' });
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
    const { images, isLoading, error, isShowImages } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        {isShowImages &&
          images &&
          images.map(el => <ImageGalleryItem key={el.id} image={el} />)}
        <ImageGallery children={<ImageGalleryItem images={images} />} />
        <button onClick={this.handleLoadMore}>Load more</button>
        {/* <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
          }}
        </div> */}
      </>
    );
  }
}

export default App;
