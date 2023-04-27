import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Input, Row } from 'reactstrap';
import type { ApiResponse, CardType } from '../../types/cardTypes';
import OneCard from '../ui/OneCard';
import MyForm from '../ui/MyForm';
import type { FormType, SubmitHandlerType } from '../../types/submitFormTypes';

export default function MainPage(): JSX.Element {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    axios<ApiResponse>('https://rickandmortyapi.com/api/character')
      .then((res) => setCards(res.data.results))
      .catch(console.log);
  }, []);

  const deleteHandler = (cardId: number): void => {
    setCards((prev) => prev.filter((card) => card.id !== cardId));
  };

  const submitHandler: SubmitHandlerType = (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as FormType;
    axios<CardType[]>(`https://rickandmortyapi.com/api/character/${data.idtext}`)
      .then((res) => setCards(res.data))
      .catch(console.log);
  };

  return (
    <>
      <Row>
        <Col xs={12}>
          <MyForm submitHandler={submitHandler} />
        </Col>
      </Row>
      <Row>
        {cards.map((card) => (
          <Col xs={4} key={card.id}>
            <OneCard card={card} deleteHandler={deleteHandler} />
          </Col>
        ))}
      </Row>
    </>
  );
}
