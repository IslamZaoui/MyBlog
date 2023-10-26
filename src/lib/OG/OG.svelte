<script lang="ts">
    export let text: string;
  </script>
  
  <style>
    .card {
      background: linear-gradient(to bottom right, #2A2E3E, #181922);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
    }
  
    .text-center {
      text-align: center;
      font-size: 5.5rem;
      color: #B5BFE2;
    }
  </style>
  
  <div class="card">
    <div class="text-center">{text}</div>
  </div>
  