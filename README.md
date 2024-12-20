# MongoDB Aggregation Error: Using String in $group Stage

This repository demonstrates a common error in MongoDB aggregation pipelines: using a string literal instead of a field expression within the `$group` stage.  This often leads to unexpected results or errors.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.  The error arises from using the string "$otherField" instead of the correct field expression `$otherField` within the `$sum` accumulator.

This example highlights the importance of using proper field expressions when working with MongoDB aggregation pipelines.