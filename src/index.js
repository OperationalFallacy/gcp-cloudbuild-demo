exports.handler = (req, res) => {

    const message="<font color='blue'>OperationalFallacy function says hello!</font><br><b>App Version 3.1415926535</b>";
    res.status(200).send(message);
  };
