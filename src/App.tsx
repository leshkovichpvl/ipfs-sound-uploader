import * as React from 'react';
import { ChangeEvent } from 'react';


interface IAppState {
  highlight: boolean;
}

export class App extends React.Component<undefined, IAppState> {

  state = {
    highlight: false,
  };


  render() {
    return <div
        onDragEnter={this.handlerDragEnter}
        onDragOver={this.handlerDragEnter}
        onDragLeave={this.handleDragLeave}
        onDrop={this.handleDrop}
    >
            <form>
                <p>Drop me files</p>
                <input type="file" id="file" multiple accept="audio/*" onChange={this.handleChoose}/>
                <label className="button" htmlFor="file">Select files</label>
                <progress id="progressBar" max={100} value={0}/>
            </form>
        </div>;
  }

  private handleChoose = (e: ChangeEvent<any>) => this.handleFiles(e.currentTarget.files);

  private handleFiles = (files) => {

  }

  private handlerDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ highlight: true });
  }

  private handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.setState({ highlight: false });
  }

  private handleDrop = (e) => {
    this.handleDragLeave(e);

    const dataTransfer = e.dataTransfer;

    this.handleFiles(dataTransfer.files);
  }


}
