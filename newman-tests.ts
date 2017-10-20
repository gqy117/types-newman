import Newman = require("newman");
import * as Promise from "bluebird";

const option: Newman.Option = {};

Newman.run(option);

const newmanAsync: Newman = Promise.promisifyAll(Newman) as Newman;
newmanAsync.runAsync(option);