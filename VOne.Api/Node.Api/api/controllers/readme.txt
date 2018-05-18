Put the processors specific to trace sub module here









// async.seq([
        //     console.log("---------------------------------------------------11111111111"),
        //     objTraceRepo.GetVehiclesAndDriversForSite(siteId, function (err, result) {
        //         if (err) {
        //             res
        //                 .status(500)
        //                 .json(err);
        //         } else {
        //             driverVehicleArr = result;
        //             console.log(result)
        //         }
        //     }),
        //     console.log("---------------------------------------------------12222222222222"),
        //     objTraceRepo.GetTrackDetails(accountId, driverVehicleArr, function (err, result) {
        //         if (err) {
        //             res
        //                 .status(500)
        //                 .json(err);
        //         } else {
        //             res.status(200);
        //             res.json(result);
        //         }
        //     })
        // ], function (err, result) {
        //     if (err) {
        //         res
        //             .status(500)
        //             .json(err);
        //     } else {
        //         res.status(200);
        //         res.json(result);
        //     }
        // });