

<div id="contentBoxApp" ng-app="contentBoxApp">
  <div id="GridCtrl" ng-controller="GridCtrl">  
    <div className="toolbar">
      <div className="container">
        <div className="toolbar-section">
          <span className="logo toolbar-item"><i className="fa fa-picture-o"></i>ContentGrid</span>
        </div>
        <div className="toolbar-section">
          <div className="toolbar-item form-field">
            <input type="text" name="filter" placeholder="phrase to filter" ng-model="search"/>
          </div>
        </div>
      </div>
    </div>
    <div className="container dynamic-grid">
      <article className="grid-item content-box" ng-repeat="(gridKey, gridItem) in gridItems | filter:filterBySearch">
        <div className="inner">
        <img className="content-box-thumb"src="{{ gridItem.img }}" alt="tech image" />
        <h1 className="content-box-header">
          {}
        </h1>
        <p className="content-box-blurb">
          {}
        </p>
        <a className="readmore-link" href="#" ng-click="toggleBlurb($event)">read more</a>
        </div>
      </article>

    </div>
  </div>
</div>
