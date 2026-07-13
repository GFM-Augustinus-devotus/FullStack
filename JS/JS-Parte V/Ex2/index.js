import { Component } from "./Component.js"

const testComponent = new Component('label')
const labelTest = document.createElement(testComponent.getRefElement())
labelTest.innerText = "Isso é um teste de uma label que foi inserida dentro de um elemento section"

const section = document.getElementById("test-section")
section.append(labelTest)