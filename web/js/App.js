var React = require('react');
import { Router, Route, Link, browserHistory } from 'react-router';
var css = require('../css/App.css');
var intlData = require('./locales/lang-zh-CN.js');

var App = React.createClass({
  render : function() {
    return (
      <div id='app-layout'>

        <div id='app-top'>
          <div className='continer-fluid'>
            <div className='row'>
              <div className='col-sm-1 col-md-1 col-lg-1'>
              </div>
              <div className='col-sm-5 col-md-5 col-lg-5'>
                <a href='#/home'>
                  <img src='/img/logoX0.7.png' alt={intlData.messages.APP_Title} />
                </a>
              </div>
              <div className='col-sm-5 col-md-5 col-lg-5'>
                <div className='app-searchAndLang'>
                  <input />
                </div>
              </div>
              <div className='col-sm-1 col-md-1 col-lg-1'>
              </div>
            </div>
          </div>
        </div>

        <nav id='app-nav'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-1 col-md-1 col-lg-1'>
              </div>
              <div className='col-sm-10 col-md-10 col-lg-10'>
                <ul className='app-menu'>
                  <li className='app-menu-item'>
                    <Link to='road' activeClassName='active'>{intlData.messages.MENU_OurRoad}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='news' activeClassName='active'>{intlData.messages.MENU_NewsAndDeals}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='practices' activeClassName='active'>{intlData.messages.MENU_OurPractices}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='professional' activeClassName='active'>{intlData.messages.MENU_OurProfessional}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='publications' activeClassName='active'>{intlData.messages.MENU_OurPublications}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='offices' activeClassName='active'>{intlData.messages.MENU_OurOffices}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='globalreach' activeClassName='active'>{intlData.messages.MENU_GlobalReach}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='careers' activeClassName='active'>{intlData.messages.MENU_Careers}</Link>
                  </li>
                  <li className='app-menu-item'>
                    <Link to='contactus' activeClassName='active'>{intlData.messages.MENU_ContactUs}</Link>
                  </li>
                </ul>
              </div>
              <div className='col-sm-1 col-md-1 col-lg-1'>
              </div>
            </div>
          </div>
        </nav>

        <div id='app-middle'>
          <div className='container-fluid'>
            <div className='col-sm-1 col-md-1 col-lg-1'>
            </div>
            <div className='col-sm-10 col-md-10 col-lg-10'>
              <div id='content'>
                {this.props.children}
              </div>
            </div>
            <div className='col-sm-1 col-md-1 col-lg-1'>
            </div>
          </div>
        </div>

        <div id='app-bottom'>
          <div className='container-fluid'>
            <div className='col-sm-1 col-md-1 col-lg-1'>
            </div>
            <div className='col-sm-7 col-md-7 col-lg-7'>
              <p>{intlData.messages.BOTTOM_Rights}</p>
            </div>
            <div className='col-sm-1 col-md-1 col-lg-1 app-bottom-siteMap'>
              <a href='#'>{intlData.messages.BOTTOM_SiteMap }</a>
            </div>
            <div className='col-sm-1 col-md-1 col-lg-1 app-bottom-legalDeclaration'>
              <a href='#'>{intlData.messages.BOTTOM_LegalDeclaration}</a>
            </div>
            <div className='col-sm-1 col-md-1 col-lg-1v app-bottom-wechat'>
              <p>wechat</p>
            </div>
            <div className='col-sm-1 col-md-1 col-lg-1'>
            </div>
          </div>
        </div>

      </div>
    )
  }
});

module.exports = App;
