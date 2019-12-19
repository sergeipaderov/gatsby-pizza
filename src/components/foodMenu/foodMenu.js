import React from 'react';
import {
  Row, Col, Tabs, Tab,
} from 'react-bootstrap';
import FoodMenuItem from './foodMenuItem';

import {
  pizza, drinks, burgers, pasta,
} from '../mock';

import '../../styles/foodMenu.scss';

const pizzaList = pizza.slice(0, 3);

const FoodMenu = () => (

  <div className="ftco-menu">
    <Row style={{ margin: 0 }}>
      <Col lg={4} className="ftco-anim img f-menu-img" style={{ backgroundImage: 'url("images/about.jpg")' }} />
      <Col lg={8} className="ftco-anim">
        <Row style={{ margin: 0 }}>
          <Row style={{ margin: 0 }}>
            <Tabs className="menu-tabs" defaultActiveKey="pizza" id="uncontrolled-tab-example">
              <Tab eventKey="pizza" title="Pizza">
                <div className="menu-tab">
                  {pizzaList.map((item) => (
                    <FoodMenuItem
                      md={4}
                      key={item.id}
                      itemImage={item.cover}
                      itemTitle={item.title}
                      itemText={item.description}
                      itemPrice={item.price}
                    />
                  ))}
                </div>

              </Tab>
              <Tab eventKey="drinks" title="Drinks">
                <div className="menu-tab">
                  {drinks.map((item) => (
                    <FoodMenuItem
                      key={item.id}
                      itemImage={item.cover}
                      itemTitle={item.title}
                      itemText={item.description}
                      itemPrice={item.price}
                    />
                  ))}
                </div>
              </Tab>
              <Tab eventKey="burgers" title="Burgers">
                <div className="menu-tab">
                  {burgers.map((item) => (
                    <FoodMenuItem
                      key={item.id}
                      itemImage={item.cover}
                      itemTitle={item.title}
                      itemText={item.description}
                      itemPrice={item.price}
                    />
                  ))}
                </div>
              </Tab>
              <Tab eventKey="pasta" title="Pasta">
                <div className="menu-tab">
                  {pasta.map((item) => (
                    <FoodMenuItem
                      key={item.id}
                      itemImage={item.cover}
                      itemTitle={item.title}
                      itemText={item.description}
                      itemPrice={item.price}
                    />
                  ))}
                </div>
              </Tab>
            </Tabs>
          </Row>
        </Row>
      </Col>
    </Row>
  </div>
);

export default FoodMenu;
