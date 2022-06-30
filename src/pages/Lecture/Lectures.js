import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/PageTitle/PageTitle'
import Grid from '../../components/Grid/Grid'
import Lecture from '../../components/Lecture/Lecture'
import { getAllLectures } from '../../api/lectures'

import {
    LecturesWrapper

} from "./LecturesStyle.js"

const Lectures = () => {

    const [card, setCard] = useState()

    useEffect(() => {
        const getLectures = async () => {
            const fetchedData = await getAllLectures()
            setCard(fetchedData);
        }

        getLectures()
    }, [])


    return (
        <LecturesWrapper>
            <PageTitle />
            <Grid>
                {card &&
                    card.map((value, index) => {

                        return (
                            <Lecture
                                key={index}
                                title={value.name}
                                isNavlakusa={value.lecture_criteria.length !== 0 ? false : true}
                            >
                                {value.description}
                            </Lecture>
                        )
                    })
                }
            </Grid>
        </LecturesWrapper>
    )
}

export default Lectures