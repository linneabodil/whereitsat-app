<template>

    <main>
        <div class="ticket-shadow2"></div>
        <div class="ticket-shadow1"></div>

        <div class="ticket-box" v-for="ticket in tickets" :key="ticket.id">

            <div class="eventname rounded">
                <p class="desc">What</p>
                <h2> {{ ticket.event.name }} </h2>
            </div>

            <div class="event-where rounded">
                <p class="desc">Where</p>
                <h3> {{ ticket.event.place }} </h3>
                <p class="adress"> {{ ticket.event.adress }}</p>
            </div>


            <div class="one">
                <p class="desc">when</p>
                <p class="info">{{ ticket.event.date.date }} {{ ticket.event.date.month }}</p>
            </div>

            <div class="two">
                <p class="desc">from</p>
                <p class="info">{{ ticket.event.startTime }}</p>
            </div>

            <div class="three">
                <p class="desc">to</p>
                <p class="info">{{ ticket.event.endTime }}</p>
            </div>


            <div class="event-place rounded">
                <p class="desc">Info</p>
                <p class="adress"> {{ ticket.event.info }} </p>
                <p class="desc"># your-unique-id</p>
                <p class="name"> {{ ticket.uniqueName }} </p>
            </div>

            <div class="barcode rounded">
                <p class="code"> {{ ticket.code }} </p> 
            </div>
      
        </div>
    </main>
</template>

<script>
export default {
    name: 'ticket',
    computed: {
        event() {
            var name = this.$route.params.name;
            return this.$store.state.events.filter(function(event) {
                return event.name == name
            })
        },
        tickets() {
            return this.$store.state.tickets;
        },
    },   
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans|Libre+Barcode+39+Text|Sansita');
@import '../scss/main.scss';

main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background: rgba(17, 17, 27, 0.932); */
    /* background: rgb(184, 184, 184); */
}


/* TICKET SHADOWS */
.ticket-shadow1, .ticket-shadow2 {
    border-top: 5px solid rgb(255, 136, 0);
    border-radius: 2.5px;
}

.ticket-shadow2 {
    height: 0.6rem;
    width: 75%;
    max-width: 18rem;
    background: rgba(252, 249, 249, 0.322);
}

.ticket-shadow1 {
    height: .9rem;
    max-width: 20rem;
    width: 80%;
    background: rgba(252, 249, 249, 0.527);
}


  /* GRID AREAS & LAYOUT */

.ticket-box {
    max-width: 22rem;
    width: 100%;
    height: auto;
    padding: 5px;
    background-image: linear-gradient( rgb(241, 163, 46), #D97119);
    border-top: 8px solid rgb(255, 136, 0);
    border-radius: 5px;
    margin-bottom: 3.12rem; /* 50px/16px*/
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 5px;
    grid-template-rows: 5px 100px 5px 150px 5px 75px 5px 150px 5px 100px 5px;
    grid-template-areas:
    ". . ."
    "eventname eventname eventname"
    ". . ."
    "event-where event-where event-where"
    ". . ."
    "one two three"
    ". . ."
    "place place place"
    ". . ."
    "barcode barcode barcode"
    ". . ."
    ;
}

/*       Grid areas & relations     */

.eventname {
    grid-area: eventname;
    background: rgba(225, 228, 225, 0.637);
    margin: 0 5px 0 5px 0;
}
.eventname h2 {
    font-family: 'Sansita', sans-serif;
    letter-spacing: 0.1rem;
    color: rgb(73, 73, 73);
}
.event-where {
    grid-area: event-where;
    background: rgba(225, 228, 225, 0.637);
}
.one {
    grid-area: one;
    background: rgba(225, 228, 225, 0.637);

}
.two {
    grid-area: two;
    background: rgba(225, 228, 225, 0.637);

}
.three {
    grid-area: three;
    background: rgba(225, 228, 225, 0.637);

}
.event-place {
    grid-area: place;
    background: rgba(225, 228, 225, 0.637);

}

.event-place :nth-child(3) {
    margin-top: 2rem;
}

.barcode {
    grid-area: barcode;
    background: rgba(225, 228, 225, 0.637);
}

p.desc {
    font-family: 'Fira Sans', sans-serif;
    color: #ff7100;
    font-size: 0.8rem;
    text-transform: uppercase;
}

p.code {
    font-family: 'Libre Barcode 39 Text', cursive;
    font-size: 5rem;
    color: rgb(36, 36, 36);
    margin-top: 1rem;
}


/* Extras */
.rounded {
    border-radius: 6px;
}

.adress {
    font-size: 0.85rem;
}


</style>
