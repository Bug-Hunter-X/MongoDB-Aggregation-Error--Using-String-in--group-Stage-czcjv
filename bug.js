```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {$match: { /*some filter*/ } },
  {$group: {_id: "$fieldName", sum: {$sum: "$otherField"}}}, //Error: Using string instead of field expression
]);
```