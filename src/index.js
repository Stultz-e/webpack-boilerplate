// use es6 imports and exports in index.js to load dependencies
// index.js is our entry point
import { run } from "./app/app";
import "./main.scss";
import { AlertService } from "./app/alert.service";
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);