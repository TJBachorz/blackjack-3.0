import React from 'react';
import { Button, Grid } from '@material-ui/core';

import { useCount } from '../Store/CountContext';
import { useIncrementCount, useDecrementCount } from '../Store/CountContext';

export default function Content() {

    const count = useCount()
    const increment = useIncrementCount()
    const decrement = useDecrementCount()

    return (
        <>
            <Grid 
                container
                item 
                direction="row-reverse" 
                justify="space-evenly"
                alignItems="center"
                xs={12} 
                sm={8} 
                md={6}
            >
                <Button 
                    color="primary" 
                    variant="outlined"
                    onClick={increment}
                >
                    +
                </Button>

                <h1 className="count">{count}</h1>

                <Button 
                    color="primary" 
                    variant="outlined"
                    onClick={decrement}
                >
                    -
                </Button>
            </Grid> 
        </>
    )
}
