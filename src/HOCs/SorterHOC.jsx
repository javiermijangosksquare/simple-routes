import React, { Fragment } from "react";

export const withSorter = Component => {
  return class WrappedComponent extends React.Component {
    state = {
      doSorting: false
    };

    handleSortClick = () => {
      this.setState(prevState => ({ doSorting: !prevState.doSorting }));
    };

    sort = (list, sortField) => {
      const { doSorting } = this.state;
      if (doSorting && list) {
        const listToSort = [...list];
        return listToSort.sort((a, b) => {
          var nameA = a[sortField].toUpperCase();
          var nameB = b[sortField].toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      }
      return list;
    };

    render() {
      const { doSorting } = this.state;
      return (
        <Fragment>
          <button onClick={this.handleSortClick} className={"button"}>
            {doSorting ? "Undo sorting" : "Sort"}
          </button>
          <br />
          <Component sortData={this.sort} {...this.props} />
        </Fragment>
      );
    }
  };
};
