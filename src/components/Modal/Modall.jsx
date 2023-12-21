import { Component } from 'react';

export class Modal extends Component {
  handleEsc = event => {
    if (event.code === 'Escape') this.props.hideModal();
    console.log('press');
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }
  render() {
    const { children, hideModal } = this.props;
    return (
      <div
        className="modal fade show"
        style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"> Modal</h5>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={hideModal}
              ></button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}
