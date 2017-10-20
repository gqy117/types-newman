import newman = require("newman");
import * as Promise from "bluebird";

const option: newman.Option = {};

newman.run(option);

const newmanAsync: newman.NewmanAsync = Promise.promisifyAll(newman) as newman.NewmanAsync;
newmanAsync.runAsync(option);