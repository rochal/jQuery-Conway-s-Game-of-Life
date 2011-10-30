/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 0.1.0
 * 
 */
var ConwayDemo = function() {
	
	var $ = jQuery,
		t = this,
		demoInitPoints = [];
	
    this.record = function() {
        //clear grid
        conway.stop();
        conway.init($('#conway-grid')[0]);
        demoInitPoints = [];
        
        $(conway.gridNode).find('td').click(function() {
            var coord = { x: $(this)[0].parentNode.rowIndex, y: $(this)[0].cellIndex };

            //enable point
            if (!conway.points[coord.x][coord.y].active) {
                $(this).css("background", "yellow");
                conway.enablePoint(coord.x, coord.y);
                demoInitPoints.push(coord);
            }
        });
    }

    this.recordingDone = function() {
        $(this.GridID + ' td').unbind('click');
        conway.start();
    }

    this.resetRecording = function() {
        conway.stop();
        conway.clear();
        $.each(demoInitPoints, function(i, val) {
            conway.enablePoint(val.x, val.y);
        });
        conway.updateDisplay();
        conway.start();
    }
   
    $('#conway .startStopButton').click(function() {
        if ($(this).val() == "Start") {
            $(this).val("Stop");
			conway.start();
        } else {
            $(this).val("Start");
			conway.stop();
        }

    });

    $('#conway #interval').change(function() {
        conway.stop();
		conway.interval = $(this).val();
        conway.start();
    });

    $('#conway #demos').change(function() {
        if ($('#conway #autostart').prop('checked')) {
            conway.start();
            $('#conway-options #start').val("Stop");
        } else {
            conway.stop();
            $('#conway-options #start').val("Start");
        }

        conway.init($('#conway-grid')[0]);
        switch (parseInt($(this).val())) {
            case 0:
                //blinker
                conway.enablePoint(8, 9);
				conway.enablePoint(9, 9);
				conway.enablePoint(10, 9);
                break;
            case 1:
                //toad
                conway.enablePoint(8, 9);
				conway.enablePoint(8, 10);
				conway.enablePoint(8, 11);
				conway.enablePoint(9, 8);
				conway.enablePoint(9, 9);
				conway.enablePoint(9, 10);
                break;
            case 2:
                //beacon
                conway.enablePoint(8, 7);
                conway.enablePoint(8, 8);
                conway.enablePoint(9, 7);
                conway.enablePoint(9, 8);
                conway.enablePoint(10, 9);
                conway.enablePoint(10, 10);
                conway.enablePoint(11, 9);
                conway.enablePoint(11, 10);
                break;
            case 3:
                //pulsar
                conway.enablePoint(11, 11);
                conway.enablePoint(12, 10);
                conway.enablePoint(12, 8);
                conway.enablePoint(11, 7);
                conway.enablePoint(9, 7);
                conway.enablePoint(8, 8);
                conway.enablePoint(8, 10);
                conway.enablePoint(9, 11);
                conway.enablePoint(11, 12);
                conway.enablePoint(11, 13);
                conway.enablePoint(9, 13);
                conway.enablePoint(9, 12);
                conway.enablePoint(9, 6);
                conway.enablePoint(9, 5);
                conway.enablePoint(11, 5);
                conway.enablePoint(11, 6);
                conway.enablePoint(13, 8);
                conway.enablePoint(14, 8);
                conway.enablePoint(14, 10);
                conway.enablePoint(13, 10);
                conway.enablePoint(7, 8);
                conway.enablePoint(7, 10);
                conway.enablePoint(6, 10);
                conway.enablePoint(6, 8);
                conway.enablePoint(8, 15);
                conway.enablePoint(7, 15);
                conway.enablePoint(6, 15);
                conway.enablePoint(8, 3);
                conway.enablePoint(7, 3);
                conway.enablePoint(6, 3);
                conway.enablePoint(12, 3);
                conway.enablePoint(13, 3);
                conway.enablePoint(14, 3);
                conway.enablePoint(12, 15);
                conway.enablePoint(14, 15);
                conway.enablePoint(13, 15);
                conway.enablePoint(16, 7);
                conway.enablePoint(16, 6);
                conway.enablePoint(16, 5);
                conway.enablePoint(16, 11);
                conway.enablePoint(16, 12);
                conway.enablePoint(16, 13);
                conway.enablePoint(4, 7);
                conway.enablePoint(4, 6);
                conway.enablePoint(4, 5);
                conway.enablePoint(4, 11);
                conway.enablePoint(4, 12);
                conway.enablePoint(4, 13);
                break;
            case 4:
                //block
                conway.enablePoint(9, 9);
                conway.enablePoint(9, 10);
                conway.enablePoint(10, 10);
                conway.enablePoint(10, 9);
                break;
            case 5:
                //beehive
                conway.enablePoint(9, 8);
                conway.enablePoint(9, 9);
                conway.enablePoint(10, 10);
                conway.enablePoint(10, 7);
                conway.enablePoint(11, 9);
                conway.enablePoint(11, 8);
                break;
            case 6:
                //loaf
                conway.enablePoint(8, 9);
                conway.enablePoint(8, 10);
                conway.enablePoint(9, 11);
                conway.enablePoint(10, 11);
                conway.enablePoint(9, 8);
                conway.enablePoint(10, 9);
                conway.enablePoint(11, 10);
                break;
            case 7:
                //boat
                conway.enablePoint(8, 8);
                conway.enablePoint(9, 8);
                conway.enablePoint(8, 9);
                conway.enablePoint(10, 9);
                conway.enablePoint(9, 10);
                break;
            case 8:
                //glider
                conway.enablePoint(0, 0);
                conway.enablePoint(1, 1);
                conway.enablePoint(0, 2);
                conway.enablePoint(1, 2);
                conway.enablePoint(2, 1);
                break;
            case 9:
                //LWSS
                conway.enablePoint(3, 2);
                conway.enablePoint(2, 3);
                conway.enablePoint(2, 4);
                conway.enablePoint(2, 5);
                conway.enablePoint(2, 6);
                conway.enablePoint(3, 6);
                conway.enablePoint(4, 6);
                conway.enablePoint(5, 5);
                conway.enablePoint(5, 2);
                break;
            case 10:
                //small exploder
                conway.enablePoint(9, 9);
                conway.enablePoint(10, 9);
                conway.enablePoint(10, 8);
                conway.enablePoint(10, 10);
                conway.enablePoint(11, 8);
                conway.enablePoint(11, 10);
                conway.enablePoint(12, 9);
                break;
            case 11:
                //exploder
                conway.enablePoint(6, 7);
                conway.enablePoint(6, 9);
                conway.enablePoint(6, 11);
                conway.enablePoint(7, 11);
                conway.enablePoint(8, 11);
                conway.enablePoint(9, 11);
                conway.enablePoint(10, 11);
                conway.enablePoint(10, 9);
                conway.enablePoint(10, 7);
                conway.enablePoint(9, 7);
                conway.enablePoint(8, 7);
                conway.enablePoint(7, 7);
                break
            case 12:
                //row
                conway.enablePoint(10, 5);
                conway.enablePoint(10, 6);
                conway.enablePoint(10, 7);
                conway.enablePoint(10, 8);
                conway.enablePoint(10, 9);
                conway.enablePoint(10, 10);
                conway.enablePoint(10, 11);
                conway.enablePoint(10, 12);
                conway.enablePoint(10, 13);
                conway.enablePoint(10, 14);
                break;
            case 13:
                //tumbler
                conway.enablePoint(7, 7);
                conway.enablePoint(7, 8);
                conway.enablePoint(8, 8);
                conway.enablePoint(8, 7);
                conway.enablePoint(9, 8);
                conway.enablePoint(10, 8);
                conway.enablePoint(11, 8);
                conway.enablePoint(12, 7);
                conway.enablePoint(12, 6);
                conway.enablePoint(11, 6);
                conway.enablePoint(10, 6);
                conway.enablePoint(7, 11);
                conway.enablePoint(7, 10);
                conway.enablePoint(8, 10);
                conway.enablePoint(8, 11);
                conway.enablePoint(9, 10);
                conway.enablePoint(10, 10);
                conway.enablePoint(11, 10);
                conway.enablePoint(12, 11);
                conway.enablePoint(12, 12);
                conway.enablePoint(11, 12);
                conway.enablePoint(10, 12);
                break;
            case 14:
                //queen bee shuttle
                conway.enablePoint(6, 7);
                conway.enablePoint(6, 8);
                conway.enablePoint(7, 9);
                conway.enablePoint(8, 10);
                conway.enablePoint(9, 10);
                conway.enablePoint(10, 10);
                conway.enablePoint(11, 9);
                conway.enablePoint(12, 8);
                conway.enablePoint(12, 7);
                break;

        }
        conway.updateDisplay();
    });

    $('#conway-options #shownbors').click(function() {
        conway.showNeighboursNum = $(this).attr("checked") ? true : false;
        conway.updateDisplay();
        if (!conway.showNeighboursNum) {
            $('#conway-grid td').html("");
        }
    });

    $('#conway #conwayClear').click(function() {
        $('#conway #conwayRecord').val("Record");
        conway.stop();
        conway.clear();
    });

    $('#conway #conwayRecord').click(function() {
        switch ($(this).val()) {
            case "Record":
                t.record();
                $(this).val("Done");
				$('#helper').html('Click on the grid to set up a point.<br/>Click Done when ready.')
                break;
            case "Done":
                t.recordingDone();
                $(this).val("Reset");
                break;
            case "Reset":
                t.resetRecording();
                break;
        }
    });

    //auto set first demo
    $('#conway #demos').val(3).change();
}
