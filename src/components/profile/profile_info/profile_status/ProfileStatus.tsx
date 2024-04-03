import React, { ChangeEvent } from 'react';

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      status: event.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        {
          !this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '-----'}</span>
          </div>
        }
        {
          this.state.editMode &&
          <div>
            <input value={this.state.status} onChange={this.onStatusChange}
                   onBlur={this.deactivateEditMode} autoFocus/>
          </div>
        }
      </>
    );
  }
}
