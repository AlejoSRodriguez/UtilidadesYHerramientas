import React from 'react'

const Table = () => {
  return (
<div className="p-20">
<h3 class="bg-red-700 mt-5 mb-5 text-center">Malas</h3>
<div class="grid grid-flow-col gap-6">

<div class="flex justify-center grid grid-rows-3 gap-6">
<div class="bg-white">1</div>
  <div class="bg-white">2</div>
  <div class="bg-white">3</div>

</div>

<div class="flex justify-center grid grid-rows-3 gap-6">

  <div class="bg-white">1</div>
  <div class="bg-white">2</div>
  <div class="bg-white">3</div>

</div>

</div>

<h3 class="bg-green-700 mt-5 mb-5 text-center">Buenas</h3>

<div class="grid grid-flow-col gap-6">

<div class="flex justify-center grid grid-rows-3 gap-6">
<div class="bg-white">1</div>
  <div class="bg-white">2</div>
  <div class="bg-white">3</div>

</div>

<div class="flex justify-center grid grid-rows-3 gap-6">

<div class="bg-white">1</div>
  <div class="bg-white">2</div>
  <div class="bg-white">3</div>
</div>

</div>

</div>
  )
}

export default Table