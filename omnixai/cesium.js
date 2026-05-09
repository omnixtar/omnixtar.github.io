var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas);
handler.setInputAction(function (click) {
    // Get Cartesian3 coordinates (X, Y, Z)
    var pickedPosition = viewer.scene.pickPosition(click.position);
    
    if (Cesium.defined(pickedPosition)) {
        // Convert to cartographic (Longitude/Latitude/Height)
        var cartographic = Cesium.Cartographic.fromCartesian(pickedPosition);
        var longitude = Cesium.Math.toDegrees(cartographic.longitude);
        var latitude = Cesium.Math.toDegrees(cartographic.latitude);
        var height = cartographic.height;
        console.log('Longitude: ' + longitude + ', Latitude: ' + latitude + ', Height: ' + height);
    }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


const blueBox = viewer.entities.add({
  name: "Blue box",
  position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
  box: {
    dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
    material: Cesium.Color.BLUE,
  },
});

/*
const blueBox = viewer.entities.add({
  // name: "Blue box",
  : name "Blue box" ;

  // position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),
  : position -114.0 40.0 300000.0 Cesium.Cartesian3.fromDegrees ;

  // box: {
    dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),
    material: Cesium.Color.BLUE,
  },
  : box dimensions material ;
  : dimensions 400000.0 300000.0 500000.0 Cesium.Cartesian3 ；
  : material Cesium.Color.BLUE ；
  
});
    viewer.entities.add
*/