package com.weng.assignment1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List; // Import List

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class NasaController {

	@Autowired
	private NasaService nasaService;

	@GetMapping("/nasa/apod")
	public List<NasaApiResponse> getNasaApod(@RequestParam(value = "date", required = false) String date,
			@RequestParam(value = "start_date", required = false) String startDate,
			@RequestParam(value = "end_date", required = false) String endDate,
			@RequestParam(value = "count", required = false) Integer count,
			@RequestParam(value = "hd", required = false) Boolean hd,
			@RequestParam(value = "thumbs", required = false) Boolean thumbs) {

		return nasaService.getNasaApod(date, startDate, endDate, count, hd, thumbs);
	}
}
