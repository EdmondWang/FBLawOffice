var React = require('react');
var css = require('../../css/pages/OfficesPage.css');
var MidHeader = require('../components/MidHeader.js');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
require('../../../node_modules/ammap3/ammap/ammap.css');
require('../../../node_modules/ammap3/ammap/ammap.js');
require('../../../node_modules/ammap3/ammap/maps/js/chinaLow.js');

var OfficesPage = React.createClass({
  componentDidMount : function() {
    AmCharts.makeChart('map', {
      type: 'map',
      colorSteps: 2,
      dataProvider: {
        map: 'chinaLow',
        areas: [
          {
            title: 'Shanghai',
            id: 'CN-31',
            value: '1',
            customData: '16 / 1.47',
            description: '<b>Status:</b> Botschaft Regierungsrat<br><b>Einkommenspauschale:</b>40"000<br><b>Vermögenspauschale:</b> 20-faches der Einkommenspauschale, mind. 8 Mio.<br><b>Inkrafttreten:</b> 1. 1. 2016, mit 5-jähriger Übergangsfrist für Altfälle<br>'
          }
        ]
      },
      areasSettings: {
        autoZoom: true
      }
    });
  },
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <MidHeader headerI18nKey={'MENU_OurOffices'} />
        </VerticalLayoutItem>
        <VerticalLayoutItem>
          <div id='map' className='map'></div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = OfficesPage;
