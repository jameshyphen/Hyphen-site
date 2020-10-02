<template>
  <Layout navbarTitle="About">
    <h1>Background</h1>
    <br />

    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus culpa corrupti aliquam dolore ducimus saepe, aut autem maxime dignissimos!</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore sed hic voluptatum asperiores distinctio sequi ad tenetur nobis dolorem animi.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae officiis repellat quisquam totam quis nihil facilis ipsa. Natus, quia.</li>
      <br />
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident beatae rem excepturi tempora vero totam, iste aliquid deleniti corrupti porro voluptate dolore, repudiandae neque magnam possimus consequatur consectetur incidunt expedita.</li>
    </ul>
    <br />

    <h1>Skillset</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Voluptates pariatur necessitatibus natus quidem architecto! 
      Sunt dolores quis architecto, quos asperiores, assumenda, laborum et culpa rerum ab nostrum! Blanditiis, 
      mollitia veritatis assumenda, minima ipsa laborum consectetur aliquam perferendis eos quas ipsam nemo doloremque vero excepturi 
      unde in repellendus quis. Porro, voluptas.<br /><br />
      
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum neque ut dolores animi veritatis.
      Dolore officia itaque culpa nisi, iste aut est esse molestiae sed inventore veritatis exercitationem asperiores laudantium!
      <br /><br />
      <small>Lorem ipsum dolor sit amet.</small>
    </p>


    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <i>Isaac Newton 15 February 1676</i>
    </div>
    <br />

    <div style="display: flex; align-items: center;">
      <v-btn outlined href="/projects">View Projects</v-btn>
      <v-btn outlined href="https://www.linkedin.com/in/dzhemaptula/">Visit LinkedIn</v-btn> 

    </div>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'About',
    meta: [
      {
        name: "description",
        content: "About Me"
      }
    ]
  }
}
</script>

<style>
</style>
