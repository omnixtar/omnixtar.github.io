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

/*
  : add viewer.entities.add ;
  : name "Blue box" ;
  : position -114.0 40.0 300000.0 Cesium.Cartesian3.fromDegrees ;
  : box dimensions material ;
  : dimensions 400000.0 300000.0 500000.0 Cesium.Cartesian3 ；
  : material Cesium.Color.BLUE ；
  name position box add
*/

s_add = ' blueBox = viewer.entities.add({\
  name: "Blue box",\
  position: Cesium.Cartesian3.fromDegrees(-114.0, 40.0, 300000.0),\
  box: {\
    dimensions: new Cesium.Cartesian3(400000.0, 300000.0, 500000.0),\
    material: Cesium.Color.BLUE,\
  },\
}); '

t_add = s_add.split(' ')
ta2=t_add
ta2[28]='Cesium.Color.RED,'
s_mod=ta2.join(' ')

// Source - https://stackoverflow.com/a/73570333
// Posted by emackey
// Retrieved 2026-05-20, License - CC BY-SA 4.0
viewer.entities.removeAll()

eval(s_mod)

s_add 28 Cesium.Color.RED, mod:
s_add color Cesium.Color.RED, mod:

f_mod=function(){var s_arg=s.pop(); var n_x=s.pop(); var s_in=s.pop();console.log(s_in,n_x,s_arg)}
f('s_add 28 Cesium.Color.RED, mod:')

// copy into browse console from
// https://github.com/omnixtar/omnixtar.github.io/blob/main/js/omnigz.js
gunzipinit()
s0=await gunzip(omnigz)
eval(s0)
omnistart()

f_mod=function(){var s_arg=s.pop(); var n_x=s.pop(); var s_in=s.pop();console.log(s_in,n_x,s_arg);var ta=s_in.split(' ');ta[n_x]=s_arg;s_mod=ta.join(' ');console.log(s_mod); }